import fetchUsers from '../modules/fetchUsers.mjs';
import { assert, expect } from 'chai';
import sinon from 'sinon';

describe('Тестирование асинхронной функции fetchUsers', () => {
  let result;
  it('Проверка результата при статусе 200', async () => {
    result = await fetchUsers();
    expect(await result).to.equal(
      'Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, Chelsey Dietrich, Mrs. Dennis Schulist, Kurtis Weissnat, Nicholas Runolfsdottir V, Glenna Reichert, Clementina DuBuque'
    );
  });
  it('Функция fetchUsers возвращает string', () => {
    assert.typeOf(result, 'string', 'функция fetchUsers возвращает string');
  });
});

describe('Тестирование функции showResult с помощью создания заглушки для функции fetchUsers', () => {
  const obj = {
    showResult: async () => await fetchUsers(),
  };
  before(function () {
    const stub = sinon
      .stub(obj, 'showResult')
      .returns(
        'Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, Chelsey Dietrich, Mrs. Dennis Schulist, Kurtis Weissnat, Nicholas Runolfsdottir V, Glenna Reichert, Clementina DuBuque'
      );
  });

  it('Функция showResult проверка результата', () => {
    const result = obj.showResult();
    expect(obj.showResult()).to.be.equal(
      'Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, Chelsey Dietrich, Mrs. Dennis Schulist, Kurtis Weissnat, Nicholas Runolfsdottir V, Glenna Reichert, Clementina DuBuque'
    );
    expect(result).to.be.a('string');
  });

  it('Функция showResult возвращает string', () => {
    const result = obj.showResult();
    expect(result).to.be.a('string');
  });
});
