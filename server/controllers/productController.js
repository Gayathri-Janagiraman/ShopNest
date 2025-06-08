const addProduct = (req, res) => {
  res.status(501).json({ message: "Add product not implemented" });
};

const updateProduct = (req, res) => {
  res.status(501).json({ message: "Update product not implemented" });
};

const deleteProduct = (req, res) => {
  res.status(501).json({ message: "Delete product not implemented" });
};

module.exports = { addProduct, updateProduct, deleteProduct };
