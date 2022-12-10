'use strict';

const API = 'https://jsonplaceholder.typicode.com';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

class Albums {
    async getAlbums() {
        let data = await fetch(API + '/albums');
        return data.json();
    }


    async getPhotos(id) {
        let data = await fetch(API + '/photos?albumId=' + id);
        return data.json();
    }

    renderAlbums(items, elem) {
        items.forEach(item => elem.innerHTML +=
            `<div class="row">
                <div class="col-12">
                    <a href="album_details.html?albumId=${item.id}"
                       target="_blank"
                       class="text-capitalize text-decoration-none">
                        ${item.title}
                    </a>
                </div>
             </div>`
        );
    }

    renderPhotos(items, elem) {
        items.forEach(item => elem.innerHTML +=
            `<div class="col-2">
                <div class="card my-3">
                    <img src="${item.thumbnailUrl}"
                        data-mdb-img="${item.url}"
                        class="card-image-top gallery-item" 
                        alt="${item.title}"
                    />
                    <div class="card-body">
                        <!-- Add "d-none" class for disabling temporarily unnecessary items -->
                        <h3 class="card-title d-none">
                            <a href="#" class="text-secondary">Id ${item.id}</a>
                        </h3>
                        <p class="card-text text-truncate" title="${item.title}">
                           ${item.title}
                        </p>
                        <a href="#" class="btn btn-primary d-none">Read More</a>
                    </div>
                </div>
            </div>`
        );
    }
}