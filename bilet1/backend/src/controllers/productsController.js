import Products from "../models/productsModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const addProducts = async (req, res) => {
  try {
    // const exsistProduct = await Products.findOne({ name: req.body.name });

    // if (exsistProduct) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Product already exsist",
    //   });
    // }

    const newProduct = new Products(req.body);

    await newProduct.save();

    return res.status(200).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;

  try {
    const findProduct = await Products.find({ _id: id });

    if (!findProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json(findProduct);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(400).json({
        success: false,
        message: "Product not deleted",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const patchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (updatedProduct) {
      return res.status(200).json({
        success: true,
        message: "Product updated successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Product not updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};

export const putProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await Products.findOneAndReplace(
      { _id: id },
      req.body
    );

    if (updatedProduct) {
      return res.status(200).json({
        success: true,
        message: "Product updated successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Product not updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error}`,
    });
  }
};
