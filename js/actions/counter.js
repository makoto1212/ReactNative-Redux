import { COUNT_UP } from '../constants/counter';
exports.countUp = () => {
  return {
    type: COUNT_UP,
    up: 1,
  };
};