import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Input, Button, Image, Spin } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import API from "@/api";
import styles from "./style.module.scss";

const usePlayerInput = () => {
  const [isLoading, setLoading] = useState(false);
  const [player, setPlayer] = useState(null);
  const listener = useRef({
    error: null,
  });

  const fetch = (name) => {
    setLoading(true);
    API.getUser(name)
      .then((res) => {
        setPlayer(res);
      })
      .catch((err) => {
        // console.error(err);
        setPlayer(null);
        if (listener.current.error) {
          listener.current.error(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    player,
    isLoading,
    submit: fetch,
    onError: (cb) => {
      listener.current.error = cb;
    },
    clearPlayer: () => setPlayer(null),
  };
};
export default function PlayerInput({ onChange }) {
  const { player, isLoading, submit, clearPlayer, onError } = usePlayerInput();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      const name = values.name.toLowerCase();
      submit(name);
      onChange(name);
    },
  });

  const handleClear = () => {
    clearPlayer();
    formik.setValues({ name: "" });
    onChange(null);
  };

  /**
   * TODO: 是否需要调整
   * 在触发错误的时候并不会清空输入框中的输入内容
   * 但是会触发onChange事件
   * 此时组件内外的数据将会出现不同步的情况
   * 即 父组件（监听方）数据被清空，而子组件（调用方）输入状态却还保留
   */
  onError(() => {
    clearPlayer();
    onChange(null);
  });

  // const style = {
  //   width: 'calc(100% - 86px)',
  //   maxWidth: 246
  // }
  return player ? (
    <div className="br3 bg-light-gray flex items-center justify-between pa2">
      <div className="flex items-center">
        <Image
          className="br3"
          src={player.avatar_url}
          width={48}
          height={48}
          preview={false}
          placeholder={
            <div className="flex items-center justify-center h-100">
              <Spin />
            </div>
          }
        />
        <span className="ml2 fw6 f3 blue">{player.login}</span>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className="pointer" onClick={handleClear} role="button" tabIndex="0">
        <FontAwesomeIcon icon={faTimesCircle} color="red" size="2x" />
      </div>
    </div>
  ) : (
    <Input.Group compact size="large">
      <Input
        name="name"
        className={styles.input}
        maxLength={30}
        value={formik.values.name}
        disabled={isLoading}
        onChange={formik.handleChange}
        onPressEnter={formik.handleSubmit}
        placeholder="github username"
      />
      <Button
        size="large"
        type="primary"
        loading={isLoading}
        disabled={!formik.values.name}
        onClick={formik.handleSubmit}
      >
        Submit
      </Button>
    </Input.Group>
  );
}

PlayerInput.defaultProps = {
  onChange() {},
};

PlayerInput.propTypes = {
  onChange: PropTypes.func,
};
