/**
 * Ligne produit dans un tableau à 2 colonnes (nom et prix)
 * @param {{name: string, stocked: boolean, price: string}} product
 */
export function ProductRow({ product }) {
  const style = product.stocked ? undefined : { color: "red" };

  const handleClick = () => {
    throw new Error("Misclicked!");
  };

  return (
    <tr onClick={handleClick}>
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
