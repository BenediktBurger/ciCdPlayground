pipeline {
    agent any
    tools {
        nodejs 'yarn'
    }

    stages {
        stage('install') {
            steps {
                sh 'yarn'
                script {
                    currentBuild.displayName = 'Name of super build'
                    currentBuild.description = "${params.Version}"
                }
            }
        }

        stage('build') {
            displayName: 'super Build!'
            description: 'Build the project'
            steps {
                sh 'yarn build'
            }
        }

        stage('unit tests') {
            steps {
                sh 'yarn test'
            }
            post {
                always {
                    junit 'reports/*.xml'
                }
            }
        }

        stage('integration tests') {
            steps {
                sh 'yarn test:e2e'
            }
            post {
                always {
                    junit 'reports/*.xml'
                }
            }
        }

        stage('deploy') {
            steps {
                s3Upload consoleLogLevel: 'INFO', 
                  dontSetBuildResultOnFailure: false, 
                  dontWaitForConcurrentBuildCompletion: false, 
                  entries: [[
                      bucket: "cicd-workshop-playground/${env.GIT_URL.split('/')[3]}", 
                      excludedFile: '', 
                      flatten: false, 
                      gzipFiles: false, 
                      keepForever: false, 
                      managedArtifacts: false, 
                      noUploadOnFailure: false, 
                      selectedRegion: 'eu-central-1', 
                      showDirectlyInBrowser: false, 
                      sourceFile: 'public/**/*.*', 
                      storageClass: 'STANDARD', 
                      uploadFromSlave: false, 
                      useServerSideEncryption: false
                    ]], 
                    pluginFailureResultConstraint: 'FAILURE', 
                    profileName: 'role-based-access', 
                    userMetadata: []
            }
        }
    }

}
