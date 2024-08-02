
// here I am fetching data from fakestoreapi

const endpoint = 'https://fakestoreapi.com/products';
const homeData = [];
const jwelleryData =[];
const electronicsData =[];
const fashionData =[];
const productsContainer = document.getElementById('products-container');
const navLink = document.querySelectorAll(".nav-link");
fetch(endpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="category">Category: ${product.category}</p>
                <p class="price">Price: $${product.price}</p>
                <p class="rating"><i class="fa-solid fa-star" style="color:#FFD43B;"></i> ${product.rating.rate} (${product.rating.count} reviews)</p>
            `;
            // <p>${product.description}</p>
            productsContainer.appendChild(productDiv);
            homeData.push(productDiv);
             if(product.category.includes("clothing") )
                   fashionData.push(productDiv);
             else if(product.category.includes("jewelery"))
                   jwelleryData.push(productDiv);
             else if(product.category.includes("electronics"))
                   electronicsData.push(productDiv);
              
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    navLink.forEach(link => {
        link.addEventListener('click', () => {
          const linkType = link.dataset.link;
          let data;
          // Call the function based on the link type
           if (linkType === 'fashion') {
             data = fashionData;
          } else if (linkType === 'jewellery') {
             data = jwelleryData
          } else if (linkType === 'electronics') {
             data = electronicsData;
          } else  {
            data = homeData;
         } 
           productsContainer.replaceChildren();
          data.forEach(productData => {
            productsContainer.appendChild(productData);
          });
        });
      });
      