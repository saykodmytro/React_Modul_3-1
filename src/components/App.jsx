import { TitleComponent } from './Title/Title';
import { Component } from 'react';
import { Product } from './Product/Product';
import { productsData } from 'Data/productsData';
import css from './App.module.css';
import Section from './Section/Section';
import Modal from './Modal/Modal';
import ProductForm from './ProductForm/ProductForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    counterValue: 0,
    products: productsData,
  };

  handleAddProduct = productData => {
    // console.log('productData', productData);
    const hasDuplicates = this.state.products.some(
      product => product.title === productData.title
    );
    if (hasDuplicates) {
      return alert(
        `Oops, product with title '${productData.title}' already exist!`
      );
    }

    const finalProduct = {
      ...productData,
      id: nanoid(),
    };

    this.setState({
      products: [...this.state.products, productData, finalProduct],
    });
  };
  hendleDeleteProduct = productId => {
    console.log('productId:', productId);
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  render() {
    const sortedProducts = [...this.state.products].sort(
      (a, b) => a.price - b.price
    );
    return (
      <div>
        <Section>
          <TitleComponent />
        </Section>
        <Section>
          <ProductForm handleAddProduct={this.handleAddProduct} />
        </Section>

        <Section title="Product List">
          <div className={css.productList}>
            {sortedProducts.map(({ id, title, price, discount }) => {
              return (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  discount={discount}
                  hendleDeleteProduct={this.hendleDeleteProduct}
                />
              );
            })}
          </div>
        </Section>

        <Modal />
      </div>
    );
  }
}
