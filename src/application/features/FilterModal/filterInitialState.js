import seamlessImmutable from 'seamless-immutable';

const filterInitialState = seamlessImmutable({
  sectionFilter: 'hot',
  sortFilter: 'viral',
  windowFilter: 'day',
  viralFilter: false
});

export default filterInitialState;
