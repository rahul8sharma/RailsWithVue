<template>
    <v-app>
        <v-toolbar>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <div>
                    <a href="/home/reorder"><v-btn color="success">Reorder</v-btn></a>
                    <a href="/home/drag_and_drop"><v-btn color="success">Drag and Drop</v-btn></a>
                    <a rel="nofollow" data-method="delete" href="/users/sign_out"><v-btn color="success">Sign out</v-btn></a>
                </div>
            </v-toolbar-items>
        </v-toolbar>
        <v-layout row>
            <v-flex xs4>
                <v-subheader>Google Drive Url</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                        name="input-1-3"
                        label="Enter Google Drive Url"
                        v-model="googleDriveUrl"
                        single-line
                ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4 text-xs-center>
                <div>
                    <v-btn large color="primary" @click="viewData">View Data</v-btn>
                </div>
            </v-flex>
        </v-layout>
        <v-layout v-if="loading">
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                        indeterminate
                        class="primary--text"
                        :width="7"
                        :size="70"></v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout v-if="questionPanel">
            <v-flex xs12 class="text-xs-center">
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="(item,i) in googleDriveData" :key="i">
                        <div slot="header">{{item.class}}</div>
                        <v-card v-for="(classQuestion,j) in item.data" :key="j">
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{classQuestion.question}}</h3>
                                    <div>
                                        <v-radio-group>
                                            <v-radio
                                                    v-for="n in classQuestion.option"
                                                    :key="n"
                                                    :label="n"
                                                    :value="n"
                                            ></v-radio>
                                        </v-radio-group>
                                    </div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                googleDriveUrl: '',
                googleDriveData: [],
                loading: false,
                questionPanel: false
            }
        },
        computed: {
        },
        methods: {
            viewData () {
                this.googleDriveData = []
                this.loading = true
                let ajaxCallUrl = '/home/get_google_drive_data?google_drive_url=' + this.googleDriveUrl
                this.$http.get(ajaxCallUrl)
                    .then(function (response) {
                        this.loading = false
                        this.questionPanel = true
                        let i = 1, j = 0, duplicateClass = false
                        for (i = 1; i < response.data.length; i++) {
                            for (j = 0; j < this.googleDriveData.length; j++) {
                                if (this.googleDriveData[j] != undefined && this.googleDriveData[j].class == response.data[i][1]) {
                                    this.googleDriveData[j].data.push(
                                        {
                                            question: response.data[i][0],
                                            option:  [
                                                response.data[i][2],
                                                response.data[i][3],
                                                response.data[i][4],
                                                response.data[i][5]
                                            ]
                                        }
                                    )
                                    duplicateClass = true
                                }
                            }
                            if (!duplicateClass) {
                                this.googleDriveData.push(
                                    {
                                        class: response.data[i][1],
                                        data:  [
                                            {
                                                question: response.data[i][0],
                                                option:  [
                                                    response.data[i][2],
                                                    response.data[i][3],
                                                    response.data[i][4],
                                                    response.data[i][5]
                                                ]
                                            }
                                        ]
                                    }
                                )
                            }
                            duplicateClass = false
                        }
                    })
            }
        }
    }
</script>