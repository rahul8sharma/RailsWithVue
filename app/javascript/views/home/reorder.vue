<template>
    <v-app>
        <v-toolbar>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-toolbar-items>
                    <div>
                        <a href="/home/drag_and_drop"><v-btn color="success">Drag and Drop</v-btn></a>
                        <a href="/home/index"><v-btn color="success">Google Drive</v-btn></a>
                        <a rel="nofollow" data-method="delete" href="/users/sign_out"><v-btn color="success">Sign out</v-btn></a>
                    </div>
                </v-toolbar-items>
            </v-toolbar-items>
        </v-toolbar>
        <draggable element="v-card" class="dragArea" :list="list" :options="{group:'people', handle:'.xxx'}" :move="checkMove" @end="endDrag" @start="startDrag">
            <v-layout row wrap v-for="(element, index) in list" :class="{'target': element===targetElement, 'ok':canDrag  , 'ko':!canDrag}" style="margin-top: 20px;">
                <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                    <v-card class="info">
                        <v-container fluid>
                            <v-layout row>
                                <v-flex xs5 sm4 md3>
                                    <v-card-media
                                            :src="element.imageUrl"
                                            height="130px"
                                    ></v-card-media>
                                </v-flex>
                                <v-flex xs7 sm8 md9>
                                    <v-card-title style="padding: 0px 0px 0px 5px;">
                                        <div>
                                            <h1 class="white--text mb-0">{{ element.name }}</h1>
                                        </div>
                                        <div style="margin-left: 65%;" class="xxx">
                                            <div style="margin-left: 65%;" class="xxx">
                                                <button><i class="material-icons">drag_handle</i></button>
                                                <button @click="elementUp(index)" v-if="index != 0"><i class="material-icons">keyboard_arrow_up</i></button>
                                                <button @click="elementDown(index)" v-if="index != list.length - 1"><i class="material-icons">keyboard_arrow_down</i></button>
                                            </div>
                                        </div>
                                    </v-card-title>
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </draggable>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                list: [
                    {name: "apple", imageUrl: 'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg'},
                    {name: "pineapple", imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--MbSD7yeG--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1509677339/production/designs/2020457_1.jpg'},
                    {name: "grape", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaS4APLyufqxiZmpjDICVPPcXkafuALxjfslktEmGT3pRzrR0oQ'},
                    {name: "strawberry", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5uHoMx674jXupNdQ17nZhtL30fPatL4ennZBqsqL195xU1HYwA'},
                    {name: 'odd', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqutlHP7rZvnh4Az9tm3C6e5IB221SSCAj9iiXazIU10otmkuxpw'},
                    {name: 'pair', imageUrl: 'https://www.healthbeckon.com/wp-content/uploads/2014/01/Pear-Fruit-For-Skin.jpg'}
                ],
                targetElement: null,
                canDrag:null,
                futureIndex:null
            }
        },
        computed: {
        },
        methods: {
            privateCheckMove: function(evt){
                this.targetElement = evt.relatedContext.element

                // if (evt.draggedContext.element.name=='odd'){
                // 	return evt.draggedContext.futureIndex % 2 === 1
                // }

                // if (evt.draggedContext.element.name=='pair'){
                // 	return evt.draggedContext.futureIndex % 2 === 0
                // }

                // if (evt.draggedContext.element.name=='apple'){
                // 	return false
                // }

                // if (evt.relatedContext.element && evt.relatedContext.element.name=='strawberry'){
                // 	return false
                // }

                // if (evt.relatedContext.list.length==2){
                // 	return false
                // }
                return true;
            },
            checkMove: function(evt){
                let res
                res = this.privateCheckMove(evt)
                this.canDrag=res;
                this.futureIndex = evt.draggedContext.futureIndex;
                return res;
            },
            endDrag: function () {
                this.canDrag=null;
                this.targetElement=null;
                this.futureIndex =null;
            },
            startDrag: function (evt) {
                console.log(evt)
            },
            elementUp: function (index) {
                // Swap element
                let rows = [this.list[index-1], this.list[index]];
                this.list.splice(index-1, 2, rows[1], rows[0] );
            },
            elementDown: function (index) {
                // Swap element
                let rows = [this.list[index], this.list[index + 1]];
                this.list.splice(index, 2, rows[1], rows[0] );
            }
        }
    }
</script>