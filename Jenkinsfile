// def label = "worker-${UUID.randomUUID().toString()}"

// podTemplate(label: label, cloud: 'kubernetes',
//     containers: [
//     ]
// ) {
//     node(label) {
//         def scmVars = checkout scm
//         def commit = scmVars.GIT_COMMIT
//         def branch = scmVars.GIT_BRANCH

//         stage('Deploy Test Environment') {
//                 script {
//                     if (branch == "origin/master" || branch == "master") {
//                         echo 'Ready to deploy environment'
//                         stage ('Trigger the wt-devops job') {
//                             build job: 'wt-generic-devops-job',
//                             parameters: [
//                                 [$class: 'StringParameterValue', name: 'PROJECT', value: "simple-web-demo"],
//                                 [$class: 'StringParameterValue', name: 'PROJECT_GITHUB_URL', value: "github.com:sunjingyun/simple-web-demo.git"],
//                                 [$class: 'StringParameterValue', name: 'DOCKER_FILE_PATH', value: "Dockerfile"],
//                                 [$class: 'BooleanParameterValue', name: 'BUILD_IMAGE', value: true],
//                                 [$class: 'StringParameterValue', name: 'IMAGE_TAG', value: ""],
//                                 [$class: 'BooleanParameterValue', name: 'UPLOAD_IMAGE', value: true],
//                                 [$class: 'BooleanParameterValue', name: 'DEPLOY_IMAGE', value: true]
//                             ]
//                         }
//                     }
//                 }
//         }
//     }
// }


def label = "worker-${UUID.randomUUID().toString()}"

podTemplate(label: label, cloud: 'kubernetes',
    containers: [
        containerTemplate(name: 'wtctl', image: 'worktile/wtctl-beta:latest', ttyEnabled: true, command: 'cat')
    ],
    volumes: [
        hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
        hostPathVolume(mountPath: '/tmp/cache', hostPath: '/tmp/cache/wt-rd-pipeline'),
        hostPathVolume(mountPath: '/root/.ssh', hostPath: '/root/.ssh')
    ]
) {
    node(label) {

        def scmVars = checkout scm

        stage('Run Deployment') {
            script {
                    echo 'Ready to run deployment'

                    container('wtctl') {
                        sh "wtctl all --test --token=36c78c66-31a7-4aae-b835-d32ecfa5a7b8"
                    }
            }
        }
    }
}
