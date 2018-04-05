<template>
    <v-app>
        <v-toolbar>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-toolbar-items>
                    <div>
                        <a href="/home/reorder"><v-btn color="success">Reorder</v-btn></a>
                        <a href="/home/index"><v-btn color="success">Google Drive</v-btn></a>
                        <a rel="nofollow" data-method="delete" href="/users/sign_out"><v-btn color="success">Sign out</v-btn></a>
                    </div>
                </v-toolbar-items>
            </v-toolbar-items>
        </v-toolbar>
        <div id="main">
            <h1>Vue Draggable</h1>
            <div class="drag">
                <div style="float: left;width: 40%;padding: 28px;border-style:groove;margin: 0 0 0 28px;">
                    <h2>List 1 Draggable</h2>
                    <draggable v-model="list" class="dragArea" :options="{group:'people'}">
                        <div v-for="element in list" style="width:320px">{{element.name}}</div>
                    </draggable>
                </div>
                <div style="padding: 28px;border-style:groove;margin: 0px 0 0px 56%;width: 40%;">
                    <h2>List 2 Draggable</h2>
                    <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
                        <div v-for="element in list2" style="width:320px">{{element.name}}</div>
                    </draggable>
                </div>
            </div>
            <div class="normal" style="margin-top: 32px;">
                <div style="float: left;width: 40%;padding: 28px;border-style:groove;margin: 0 0 0 28px;">
                    <h2>List 1 v-for</h2>
                    <div>
                        <div v-for="element in list">{{element.name}}</div>
                    </div>
                </div>
                <div style="padding: 28px;border-style:groove;margin: 0px 0 0px 56%;width: 40%;">
                    <h2>List 2 v-for</h2>
                    <div>
                        <div v-for="element in list2">{{element.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                list: [{
                    name: "John"
                }, {
                    name: "Joao"
                }, {
                    name: "Jean"
                }],
                list2: [{
                    name: "Juan"
                }, {
                    name: "Edgard"
                }, {
                    name: "Johnson"
                }]
            }
        },
        computed: {
        },
        methods: {
            add: function() {
                this.list.push({
                    name: 'Juan'
                });
            },
            replace: function() {
                this.list = [{
                    name: 'Edgard'
                }]
            }
        }
    }
</script>