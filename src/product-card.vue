<template>
  <div class="product-card" :class="{small: isSmall}">
    <div class="product-card__card-top" :class="{disabled: isDisabled}">
        <img :src="img" alt="image judul">
    </div>
    <div class="product-card__card-bottom">
        <p class="product-card__card-bottom__title">{{title}}</p>
        <p class="product-card__card-bottom__price">{{price}}</p>
        <template v-if="isDiscount">
            <p class="product-card__card-bottom__discount">
                {{prevPrice}}
                <span class="product-card__card-bottom__discount-sum">
                    {{discount}}
                </span>
            </p>
        </template>
        <button class="product-card__btn-blue">
            <template v-if="isDisabled">
                Add to bag
            </template>
            <template v-else>
                Out of Stock
            </template>
        </button>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ProductCard',
    props: {
        img: {
            default: ""
        },
        type: {
            default: "active"
        },
        size: {
            default: "normal"
        },
        title: {
            default: ""
        },
        price: {
            default: "Rp.00.000"
        },
        prevPrice: {
            default: "Rp.00.000"
        },
        discount: {
            default: "Rp.00.000"
        }
    },
    data() {
        return {
            isDisabled: false,
            isDiscount: false,
            isSmall: false
        }
    },
    mounted() {
        (this.type === "disabled") ? (this.isDisabled = true) : (this.isDisabled = false);
        (this.size === "small") ? (this.isSmall = true) : (this.isSmall = false);
        (this.prevPrice !== "") ? (this.isDiscount = true) : (this.isDiscount = false);
    },
}
</script>

<style scoped>
.product-card {
	 position: relative;
	 flex: 1 132px;
	 min-width: 132px;
	 background-color: #fff;
	 border-radius: 16px;
	 overflow: hidden;
	 margin: 0 8px;
	 box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
	 transition: box-shadow 0.5s ease-in-out;
}
 .product-card:hover {
	 box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
}
 .product-card:last-child {
	 margin-right: 0;
}
 .product-card:first-child {
	 margin-left: 0;
}
 .product-card p {
	 margin: 0;
}
 .product-card__card-top {
	 position: relative;
}
 .product-card__card-top img {
	 width: 100%;
	 height: 100%;
	 object-fit: contain;
}

.product-card img.disabled {
    opacity: 0.5;
}
 .product-card__card-bottom {
	 position: relative;
	 width: 100%;
	 padding: 8px;
}
 .product-card__card-bottom__title {
	 font-size: 14px;
	 font-weight: 600;
	 color: rgba(0, 0, 0, 0.8);
	 line-height: 1.4em;
	 overflow: hidden;
	 box-orient: vertical;
	 -webkit-box-orient: vertical;
	 line-clamp: 2;
	 -webkit-line-clamp: 2;
	 display: -webkit-box;
	 padding-right: 1rem;
	 text-overflow: ellipsis;
}
 .product-card__card-bottom__price {
	 color: #ed7d45;
	 font-size: 14px;
	 font-weight: 600;
	 line-height: 1.3;
}
 .product-card__card-bottom__discount {
	 color: rgba(0, 0, 0, 0.5);
	 font-size: 12px;
	 line-height: 1.3;
}
 .product-card__card-bottom__discount-sum {
	 padding: 0px 4px;
	 border-radius: 12px;
	 line-height: 1;
	 font-size: 10px;
	 font-weight: 600;
	 background: #feb1b4;
	 color: #f06067;
}
 .product-card__btn-blue {
	 width: calc(100% - 16px);
	 font-weight: 600;
	 padding: 8px;
	 font-size: 11px;
	 border: none;
	 outline: 0;
	 border-radius: 8px;
	 cursor: pointer;
	 background: #0a8cd2;
	 color: #fff;
	 margin-top: 8px;
	 transition: all 0.3s ease-in-out;
}
 .product-card__btn-blue:hover {
	 background: #0873ad;
}
 @media all and (min-width: 789px) {
	 .product-card {
		 flex: 1 182px;
		 min-width: 182px;
	}
}
</style>
