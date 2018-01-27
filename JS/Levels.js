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
            [0,'doctor'],
            [5, 'doctor']];
        break;
      case 2:
          return [
              [2,'doctor'],
              [9, 'doctor']];
          break;

  }
}
