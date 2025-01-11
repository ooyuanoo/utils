import {formatCountdown} from "../src/date-time-formatter";

test('count down 120s should be displayed as 00:02:00', () => {
  expect(formatCountdown(120)).toStrictEqual({
    hours: '00',
    minutes: '02',
    seconds: '00',
  });
});

test('count down 7201s should be displayed as 02:00:01', () => {
  expect(formatCountdown(7201)).toStrictEqual({
    hours: '02',
    minutes: '00',
    seconds: '01',
  });
});

test('count down 100830s should be displayed as 28:30:02', () => {
  expect(formatCountdown(100922)).toStrictEqual({
    hours: '28',
    minutes: '02',
    seconds: '02',
  });
});


test('count down 120s should be displayed as 00:00:02:00', () => {
  expect(formatCountdown(120, 'dd:hh:mm:ss')).toStrictEqual({
    days: '00',
    hours: '00',
    minutes: '02',
    seconds: '00',
  });
});

test('count down 7201s should be displayed as 02:00:01', () => {
  expect(formatCountdown(7201, 'dd:hh:mm:ss')).toStrictEqual({
    days: '00',
    hours: '02',
    minutes: '00',
    seconds: '01',
  });
});

test('count down 100830s should be displayed as 28:30:02', () => {
  expect(formatCountdown(100922, 'dd:hh:mm:ss')).toStrictEqual({
    days: '01',
    hours: '04',
    minutes: '02',
    seconds: '02',
  });
});