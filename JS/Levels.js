function getLevel(number){
  switch(number){
    case 1:
      return [
        ['c', 'c', 'p', 'p', 'p', 'drawersSE', 'drawersSE', 'drawersSE', 'p', 'p', 'c', 'c'],
        ['c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p', 'p'],
        ['p', 'p', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p'],
        ['p', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p', 'p'],
        ['p', 'p', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c'],
        ['c', 'c', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'c', 'c']];

      case 2:
        return [
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'p', 'p', 'p', 'p', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
          ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g']];
    default:
  }
}

function getPeopleLevel(number){
  switch(number){
      case 1:
        return [
            [10,'germ', 'germ'],
            [0,'doctor','patient'],
            [5, 'doctor','patient']];
        break;
      case 2:
          return [
              [10,'germ', 'germ'],
              [2,'doctor','patient'],
              [9, 'doctor','patient']];
          break;

  }
}
