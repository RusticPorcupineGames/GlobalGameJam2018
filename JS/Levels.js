var numberOflevels = 12;

function getLevel(number) {
  switch (number) {
    case 1:
      return [
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['p', 'p', 'p', 'p', 'tilepurpledoorNWwallRHS', 'tilepurpledoorNW', 'tilepurpledoorNWwallLHS', 'p', 'p', 'p', 'p', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']];

    case 2:
      return [
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['p', 'p', 'p', 'p', 'b', 'b', 'd', 'p', 'p', 'p', 'p', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']];

    case 3:
      return [
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']];

    case 4:
      return [
        ['p', 'p', 'p', 'p', 'e', 'e', 'e', 'e', 'p', 'p', 'p', 'p'],
        ['p', 'c', 'c', 'p', 'e', 'e', 'e', 'e', 'p', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'p', 'e', 'e', 'e', 'e', 'p', 'c', 'c', 'p'],
        ['p', 'c', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']];

    case 5:
      return [
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'p', 'p', 'c', 'c', 'b', 'b', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'p', 'p', 'c', 'c', 'd', 'b', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'd', 'b', 'c', 'c', 'p'],
        ['p', 'c', 'p', 'p', 'p', 'p', 'p', 'd', 'b', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'p', 'c', 'p', 'c', 'p', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']];

    case 6:
      return [
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'p', 'p', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'p', 'p', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'p', 'p', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'p', 'p', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'p'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']];
    default:
  }
}

function getPeopleLevel(number) {
  switch (number) {
    case 1:
      return [
        [61, 'germ', 'germ', 'none'],
        [67, 'patient2', 'patient', 'none'],
        [58, 'patient1', 'patient', 'line']];
      break;
    case 2:
      return [
          [56,'germ', 'germ','none'],
          [52,'doctor','doctor','line'],
          [51,'patient2','patient','none'],
          [40,'patient2','patient','none']];
      break;
    case 3:
      return [
        [57, 'germ', 'germ', 'none'],
        [53, 'doctor', 'doctor', 'line'],
        [63, 'patient2', 'patient', 'line'],
        [49, 'patient2', 'patient', 'none'],
        [89, 'patient2', 'patient', 'none']];
      break;
    case 4:
    return [
        [13,'germ', 'germ','none'],
        [49,'doctor','doctor','line'],
        [63,'doctor','doctor','line'],
        [78,'doctor','doctor','line'],
        [92,'doctor','doctor','line'],
        [33,'patient2','patient','none'],
        [117,'patient2','patient','none'],
        [125,'patient2','patient','none']];
    case 5:
      return [
        [13, 'germ', 'germ', 'none'],
        [30, 'doctor', 'doctor', 'line'],
        [64, 'doctor', 'doctor', 'line'],
        [99, 'doctor', 'doctor', 'line'],
        [62, 'patient2', 'patient', 'line'],
        [49, 'patient2', 'patient', 'none'],
        [89, 'patient2', 'patient', 'none']];
      break;
    case 6:
    return [
        [13,'germ', 'germ','none'],
        [37,'doctor','doctor','line'],
        [63,'doctor','doctor','line'],
        [78,'doctor','doctor','line'],
        [104,'doctor','doctor','line'],
        [33,'patient2','patient','none'],
        [117,'patient2','patient','none'],
        [125,'patient2','patient','none']];
    default:
      return [
        [10, 'germ', 'germ', 'none'],
        [8, 'patient1', 'patient', 'none']];
      break;
  }
}
