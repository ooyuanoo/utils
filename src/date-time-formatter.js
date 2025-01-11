/**
 * convert countdown number to
 * @param timestamp <Number> seconds
 * @param format <String> 'hh:mm:ss' || 'dd:hh:mm:ss', default 'hh:mm:ss'
 */
export function formatCountdown(timestamp = 0, format = 'hh:mm:ss') {
  const hasDay = format === 'dd:hh:mm:ss';
  let time = {
    hours: '00',
    minutes: '00',
    seconds: '00'
  };

  if (timestamp <= 0) {
    return hasDay ? {
      day: '00',
      ...time,
    } : time
  }


  if (hasDay) {
    const days = Math.floor(timestamp / (60 * 60 * 24));
    const hours = Math.floor((timestamp % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timestamp % (60 * 60)) / 60);
    const seconds = Math.floor(timestamp % 60);

    return {
      days: `${`${days}`.padStart(2, '0')}`,
      hours: `${`${hours}`.padStart(2, '0')}`,
      minutes: `${`${minutes}`.padStart(2, '0')}`,
      seconds: `${`${seconds}`.padStart(2, '0')}`
    }
  }

  const hours = Math.floor(timestamp / (60 * 60));
  const minutes = Math.floor((timestamp % (60 * 60)) / 60 );
  const seconds = Math.floor(timestamp % 60);

  return {
    hours: `${`${hours}`.padStart(2, '0')}`,
    minutes: `${`${minutes}`.padStart(2, '0')}`,
    seconds: `${`${seconds}`.padStart(2, '0')}`
  };
}