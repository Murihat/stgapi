const responseHelper = require('../../helpers/responseHelper');
const brandsModel = require('../../models/brands/brands.model');

const brandsCtrl = {
  async getAll(req, res) {
    try {
      const data = await brandsModel.getAll();

      if (!data || data.length === 0) {
        return responseHelper.errorResponse(res, {
          message: 'Brands data not found'
        });
      }

      return responseHelper.successResponse(res, {
        status: true,
        data
      });
    } catch (error) {
      return responseHelper.errorResponse(res, {
        message: error.message
      });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const data = await brandsModel.getById(id);

      if (!data) {
        return responseHelper.errorResponse(res, {
          message: 'Brand not found'
        });
      }

      return responseHelper.successResponse(res, {
        status: true,
        data
      });
    } catch (error) {
      return responseHelper.errorResponse(res, {
        message: error.message
      });
    }
  }
};

module.exports = brandsCtrl;
