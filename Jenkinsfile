def label = "worker-${UUID.randomUUID().toString()}"

def getCurrentBranch () {
    return sh (
        script: 'git rev-parse --abbrev-ref HEAD',
        returnStdout: true
    ).trim()
}

podTemplate(label: label, cloud: 'kubernetes', 
    containers: [
        containerTemplate(name: 'certified', image: 'sunjingyun/node:10-certified', ttyEnabled: true, command: 'cat')
    ],
    volumes: [hostPathVolume(mountPath: '/worktile', hostPath: '/data/k8s/pv')]
) {
    node(label) {
        
        checkout scm

        echo "??? Branch name is ${scm.branches[0].name}"

        def branch = getCurrentBranch()

        echo "The branch name is ${branch}"

        stage('Run Unit Test') {
                script {
                    sh "printenv"

                    if (branch == "master") {
                        echo 'Ready to run unit test'

                        container('certified') {
                            sh "node -v && npm -v && ls"
                        }
                    }
                    else {
                        echo 'Skip the unit test'
                    }
                }
        }
        
        stage('Deploy Test Environment') {
                script {
                    if (branch == "master") {
                        echo 'Ready to deploy environment'
                        stage ('Trigger the wt-devops job') {
                            build job: 'wt-generic-devops-job',
                            parameters: [
                                [$class: 'StringParameterValue', name: 'PROJECT', value: "simple-web-demo"],
                                [$class: 'StringParameterValue', name: 'PROJECT_GITHUB_URL', value: "github.com:sunjingyun/simple-web-demo.git"],
                                [$class: 'StringParameterValue', name: 'DOCKER_FILE_PATH', value: "Dockerfile"],
                                [$class: 'BooleanParameterValue', name: 'BUILD_IMAGE', value: true],
                                [$class: 'StringParameterValue', name: 'IMAGE_TAG', value: ""],
                                [$class: 'BooleanParameterValue', name: 'UPLOAD_IMAGE', value: true],
                                [$class: 'BooleanParameterValue', name: 'DEPLOY_IMAGE', value: true]
                            ]
                        }
                    }
                }
        }
    }
}