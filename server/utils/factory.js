const asyncCatch = require("./asyncCatch");
const GlobalError = require("../errors/GlobalError");

//CRUD
const createNew = (Model) =>
  asyncCatch(async (req, res, next) => {
    const created = await Model.create(req.body);
    if (!created)
      return next(
        new GlobalError(`Cannot create new ${Model.constructor.modelName}`, 500)
      );
    res.status(200).json({
      success: true,
      data: {
        [Model.modelName]: created,
      },
    });
  });

const getAll = (Model) =>
  asyncCatch(async (req, res, next) => {
    const allModels = await Model.find();
    if (!allModels)
      return next(
        new GlobalError(`Cannot get ${Model.constructor.modelName}`, 500)
      );
    res.status(200).json({
      success: true,
      quantity: allModels.length,
      data: { allModels },
    });
  });

const getById = (Model) =>
  asyncCatch(async (req, res, next) => {
    const id = req.params.id;
    const oneModel = await Model.findById(id);
    if (!oneModel)
      return next(
        new GlobalError(
          `Invalid id: ${Model.constructor.modelName} not found `,
          404
        )
      );
    res.status(200).json({
      success: true,
      data: {
        [Model.constructor.modelName]: oneModel,
      },
    });
  });

const updateOne = (Model) =>
  asyncCatch(async (req, res, next) => {
    const id = req.params.id;
    let updated = await Model.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!updated) return next(new GlobalError("Invalid Id: UPDATE", 500));
    res.status(200).json({
      success: true,
      data: {
        [Model.constructor.modelName]: updated,
      },
    });
  });

const deleteOne = (Model) =>
  asyncCatch(async (req, res, next) => {
    const id = req.params.id;

    let deleted;

    if (req.user.role === "admin") {
      deleted = await Model.findOneAndDelete({
        _id: id,
      });
    } else {
      deleted = await Model.findOneAndDelete({
        _id: id,
        creator: req.user._id,
      });
    }

    if (!deleted) return next(new GlobalError("Invalid Id: DELETE", 500));
    res.status(200).json({
      success: true,
      message: "deleted",
    });
  });

module.exports = { createNew, updateOne, deleteOne, getAll, getById };
