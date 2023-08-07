import React, { useState, useEffect } from "react";
import productsData from "./products.json";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { BlackButton, CssTextFlied, BlackTags } from "../generic-styles";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultCount, setResultCount] = useState(0);
  const [searchTags, setSearchTags] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterProducts = (products, term) => {
    return products.filter((product) => {
      // Verificar que los campos necesarios existan y sean cadenas de texto
      const description =
        product.description && typeof product.description === "string"
          ? product.description.toLowerCase()
          : "";
      const code =
        product.code && typeof product.code === "string"
          ? product.code.toLowerCase()
          : "";

      return (
        description.includes(term.toLowerCase()) ||
        code.includes(term.toLowerCase())
      );
    });
  };

  const fetchProducts = () => {
    setLoading(true);
    // simular timeout de 3 segundos
    setTimeout(() => {
      const filteredProducts = filterProducts(productsData, searchTerm);
      setProducts(filteredProducts);
      setResultCount(filteredProducts.length);
      setLoading(false);

      // Agregar etiqueta de búsqueda
      setSearchTags((prevTags) => [...prevTags, searchTerm]);
    }, 3000);
  };

  const updateProducts = (tags) => {
    if (tags.length === 0) {
      // Si no hay etiquetas de búsqueda, mostrar todos los productos
      setProducts(productsData);
      setResultCount(productsData.length);
    } else {
      // Filtrar productos basado en las etiquetas de búsqueda
      const filteredProducts = productsData.filter((product) =>
        tags.every(
          (tag) =>
            product.description.toLowerCase().includes(tag.toLowerCase()) ||
            product.code.toLowerCase().includes(tag.toLowerCase())
        )
      );
      setProducts(filteredProducts);
      setResultCount(filteredProducts.length);
    }
  };

  useEffect(() => {
    // Actualizar productos cuando se hace clic en el botón de búsqueda
    if (loading) {
      updateProducts(searchTags);
    }
  }, [loading, searchTags]);

  useEffect(() => {
    // Actualizar productos cuando se monta el componente
    updateProducts(searchTags);
  }, []);

  const handleRemoveTag = (tag) => {
    setSearchTags((prevTags) => prevTags.filter((t) => t !== tag));
    updateProducts(searchTags.filter((t) => t !== tag));
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: "#FFFFFF", width: "90%", my: 0, mx: "auto" }}>
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Product List
        </Typography>
        <Grid
          container
          direction="row"
          spacing={0}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item flex={1}>
            <CssTextFlied
              label="Ingresar producto"
              value={searchTerm}
              onChange={handleSearch}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <BlackButton variant="contained" onClick={fetchProducts}>
              Buscar
            </BlackButton>
          </Grid>
        </Grid>
        <Box mt={2}>
          {searchTags.map((tag) => (
            <BlackTags
              key={tag}
              label={tag}
              onDelete={() => handleRemoveTag(tag)}
              color="primary"
              style={{ margin: 4 }}
            />
          ))}
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={3}>
            <CircularProgress />
          </Box>
        ) : (
          <div>
            <Grid container spacing={2} mt={2}>
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6}> 
                  <Box display="flex" alignItems="center">
                    <img
                      src={product.image}
                      alt={product.description}
                      style={{ width: 184, height: 184, marginRight: 10 }}
                    />
                    <Box>
                      <Typography variant="body1">{product.name}</Typography>
                      <Typography variant="body2">{product.code}</Typography>
                      <Typography variant="body2">
                        Precio: {product.price}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        <Typography variant="body1" gutterBottom sx={{ color: "#757575" }}>
          {resultCount} {resultCount === 1 ? "resultado" : "resultados"}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductList;
