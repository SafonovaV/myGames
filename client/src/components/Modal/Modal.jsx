import React from 'react';
import cl from './Modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setVisModalFalse } from '../../store/modal/creators';

export default function Modal() {
  const rootClasses = [cl.myModal];
  const visible = useSelector((store) => store.modal.modal.visible);
  const dispatch = useDispatch();
  if (visible) {
    rootClasses.push(cl.active);
  }
  const close = () => {
    dispatch(setVisModalFalse());
  };
  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.myModalContent}>
        <div className={cl.block1}>
          <div>Таймер 30 секунд</div>
          <div>
            <img
              onClick={close}
              className={cl.img}
              src="/img/close.png"
              alt="закрыть"
            />
          </div>
        </div>
        <h4>Вопрос:</h4>
        <div>
          По мнению Талейрана, этот напиток должен быть крепким, как негр,
          черным, как ночь, и сладким, как первый поцелуй. Назовите его.
        </div>
        <div className={cl.block}>
          {' '}
          <input type="text" className={cl.myInput} />
          <div>
            {' '}
            <img className={cl.img} src="/img/send.png" alt="ответить" />
          </div>
        </div>
        <p>верно/неверно</p>
      </div>
    </div>
  );
}
