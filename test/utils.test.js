import { didUserWin, getRandomObject } from '../utils.js';

const test = QUnit.test;

test('Paper beats rock', assert => {
    let expected = 'win';
    let actual = didUserWin('paper', 'rock');
    assert.equal(actual, expected);
});

test('Rock beats scissors', assert => {
    let expected = 'win';
    let actual = didUserWin('rock', 'scissors');
    assert.equal(actual, expected);
});

test('Scissors beats paper', assert => {
    let expected = 'win';
    let actual = didUserWin('scissors', 'paper');
    assert.equal(actual, expected);
});

test('Rock losses to paper', assert => {
    let expected = 'lose';
    let actual = didUserWin('rock', 'paper');
    assert.equal(actual, expected);
});

test('Paper losses to rock', assert => {
    let expected = 'lose';
    let actual = didUserWin('paper', 'rock');
    assert.equal(actual, expected);
});

test('Scissors losses to rock', assert => {
    let expected = 'lose';
    let actual = didUserWin('scissors', 'rock');
    assert.equal(actual, expected);
});

test('Paper draws to paper', assert => {
    let expected = 'draw';
    let actual = didUserWin('paper', 'paper');
    assert.equal(actual, expected);
});

test('Rock draws to rock', assert => {
    let expected = 'draw';
    let actual = didUserWin('rock', 'rock');
    assert.equal(actual, expected);
});

test('Scissors draws to scissors', assert => {
    let expected = 'draw';
    let actual = didUserWin('scissors', 'scissors');
    assert.equal(actual, expected);
});