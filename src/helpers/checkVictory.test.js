import { checkVictory } from './checkVictory';

const testSign = 'x';

describe('test checkVictory cases', () => {
  test('1 row victory for X player', () => {
    const testBoard = [
      [{ element: testSign, color: null }, { element: testSign, color: null }, { element: testSign, color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
    ];
    const isVictory = checkVictory(testBoard);
    expect(isVictory).toBe(testSign)
  });

  test('2 row victory for X player', () => {
    const testBoard = [
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: testSign, color: null }, { element: testSign, color: null }, { element: testSign, color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
    ];
    const isVictory = checkVictory(testBoard);
    expect(isVictory).toBe(testSign)
  });

  test('3 row victory for X player', () => {
    const testBoard = [
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: testSign, color: null }, { element: testSign, color: null }, { element: testSign, color: null }],
    ];
    const isVictory = checkVictory(testBoard);
    expect(isVictory).toBe(testSign)
  });

  test('1 column victory for X player', () => {
    const testBoard = [
      [{ element: testSign, color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: testSign, color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: testSign, color: null }, { element: '', color: null }, { element: '', color: null }],
    ];
    const isVictory = checkVictory(testBoard, 'x');
    expect(isVictory).toBeTruthy();
  });

  test('2 column victory for X player', () => {
    const testBoard = [
      [{ element: '', color: null }, { element: testSign, color: null }, { element: '', color: null }],
      [{ element: '', color: null }, { element: testSign, color: null }, { element: '', color: null }],
      [{ element: '', color: null }, { element: testSign, color: null }, { element: '', color: null }],
    ];
    const isVictory = checkVictory(testBoard);
    expect(isVictory).toBe(testSign);
  });

  test('3 column victory for X player', () => {
    const testBoard = [
      [{ element: '', color: null }, { element: '', color: null }, { element: testSign, color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: testSign, color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: testSign, color: null }],
    ];
    const isVictory = checkVictory(testBoard);
    expect(isVictory).toBe(testSign);
  });

  test('left diagonal victory for X player', () => {
    const testBoard = [
      [{ element: testSign, color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: '', color: null }, { element: testSign, color: null }, { element: '', color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: testSign, color: null }],
    ];
    const isVictory = checkVictory(testBoard);
    expect(isVictory).toBe(testSign);
  });

  test('right diagonal victory for X player', () => {
    const testBoard = [
      [{ element: '', color: null }, { element: '', color: null }, { element: testSign, color: null }],
      [{ element: '', color: null }, { element: testSign, color: null }, { element: '', color: null }],
      [{ element: testSign, color: null }, { element: '', color: null }, { element: '', color: null }],
    ];
    const isVictory = checkVictory(testBoard);
    expect(isVictory).toBe(testSign);
  });

  test('negative case', () => {
    const testBoard = [
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
      [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
    ];
    const isVictory = checkVictory(testBoard);
    expect(isVictory).toBe(null);
  });
});
