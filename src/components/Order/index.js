import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import styles from './styles';


export default (props) => {

    function renderProductList(){

    }

    function renderExtraItems(){

    }
  return (
        <React.Fragment>
            {/* ORDER */}
            <View style={styles.headerOrder}>
                <Image style={styles.orderStatus} source={require('../../assets/images/meal.png')}/>
                <Text style={styles.address}>{props.address}</Text>
            </View>

            {/* PRODUCTS */}
            <ScrollView
                nestedScrollEnabled={true}
                style={styles.productList}
            >
                {products.length > 0 && renderProductList()}
            </ScrollView>

            {/* EXTRA ITEMS */}
            <ScrollView
                nestedScrollEnabled={true}
            >
                {props.extraItems === 1 && 
                    <Text style={styles.addTitle}>Adicionais</Text>
                }
                    <View style={styles.extraItemArea}>
                        {props.extraItems === 1 && renderExtraItems()}
                    </View>
                

                {/* Total */}
                <View style={styles.priceArea}>
                    <Text style={styles.total}>Total:</Text>
                    <Text style={styles.price}>
                        {props.total}
                    </Text>
                </View>
            </ScrollView>
        </React.Fragment>
  );
}
