// eslint-disable-next-line import/no-extraneous-dependencies
export default {
  'POST  /api/basicForm': (_, res) => {
    res.send({
      data: {
        message: `'Ok' ${new Date()}`,
      },
    });
  },
  
  'POST  /api/product': (_, res) => {
    res.send({
        data: {
            message : `'Api product called OK' ${new Date()}`,
        }
    })
  }
};

