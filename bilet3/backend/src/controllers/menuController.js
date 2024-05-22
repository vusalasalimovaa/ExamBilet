import Menu from "../models/menuModel.js";

export const getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    return res.status(200).json(menu);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const addMenu = async (req, res) => {
  try {
    // const exsistMenu = await Menu.find();

    // if (exsistMenu) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Menu already exsist",
    //   });
    // }

    const newMenu = new Menu(req.body);

    await newMenu.save();
    return res.status(201).send("ugurlu");
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const getMenuById = async (req, res) => {
  const { id } = req.params;

  try {
    const findMenu = await Menu.findOne({ _id: id });

    if (findMenu) {
      return res.status(200).json({
        success: true,
        message: "Menu found",
      });
    }

    return res.status(404).json({
      success: false,
      message: "Menu not found found",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const deletetMenuById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMenu = await Menu.findByIdAndDelete(id);

    if (deletedMenu) {
      return res.status(200).json({
        success: true,
        message: "Menu deleted successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Menu not deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const patchMenuById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedMenu = await Menu.findByIdAndUpdate({ _id: id }, req.body);

    if (updatedMenu) {
      return res.status(200).json({
        success: true,
        message: "Menu updated successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Menu not updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const putMenuById = async (req, res) => {
  const { id } = req.params;

  try {
    const findMenu = await Menu.findOneAndReplace({ _id: id }, req.body);

    if (findMenu) {
      return res.status(200).json({
        success: true,
        message: "Menu updated succesfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Menu not updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};
