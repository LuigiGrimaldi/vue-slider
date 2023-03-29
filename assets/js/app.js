console.log('hello world');
const { createApp } = Vue
createApp({
    data() {
        return {
            activeImage: 0,
            arrImages: {
                images: [
                    "assets/img/01.webp",
                    "assets/img/02.webp",
                    "assets/img/03.webp",
                    "assets/img/04.webp",
                    "assets/img/05.webp"

                ]
            }
        }
    },
    methods: {
        next() {
            console.log('Next');
            this.activeImage++
            if (this.activeImage === this.arrImages.images.length) {
                this.activeImage = 0
            }

        },
        prev() {
            console.log('Prev');
            this.activeImage--
            if (this.activeImage < 0) {
                this.activeImage = this.arrImages.images.length - 1
            }
        },
        changeImage(index) {
            //console.log(index);
            //console.log('Cliccato su elemento:', index);
            // take from the cliccket image its index 

            // update the activeImage value
            this.activeImage = index

        }
    },
    mounted() {
        // console.log('Mounted');
        // console.log(this.arrImages);
    }
}).mount('#app')