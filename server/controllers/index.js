// There is no reason for the name here except as an
// example of how to set something for the POST
let name = 'unknown';
let names = ['Austin', 'Cody', 'Travis', 'Bob'];

const hostIndex = (req, res) => {
  res.render('index', {
    title: 'Home Page',
    name,
  });
};

const hostPage1 = (req, res) => {
  const filtered = names.filter(x => x.length <= 4);

  res.render('page1', {
    title: 'Page 1',
    names: filtered,
  });
};

const hostPage2 = (req, res) => {
  res.render('page2');
};

const getName = (req, res) => {
  res.json({ name });
};

const setName = (req, res) => {
  if (!req.body.firstname || !req.body.lastname) {
    return res.status(400).json({
      error: 'firstname and lastname are both required',
      id: 'setNameMissingParams'
    });
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  names.push(name);
  return res.json({ name });
};

const notFound = (req, res) => {
  res.status(404).render('notFound', {
    page: req.url,
  });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
