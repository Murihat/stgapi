const brands = [
    { id: 1, name: 'Sushi Tei' },
    { id: 2, name: 'Tom Sushi' }
]

const brandsModel = {
  async getAll() {
    return brands;
  },

  async getById(id) {
    return brands.find(b => b.id === Number(id)) || null;
  }
};

module.exports = brandsModel;
