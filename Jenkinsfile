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
        hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')
    ]
) {
    node(label) {

        def scmVars = checkout scm

        stage('Run Deployment') {
            script {
                    echo 'Ready to run deployment'

                    container('wtctl') {
                        sh '''
                            docker run --rm --env BUILD_URL="$BUILD_URL" --env BUILD_ID="$BUILD_ID" --env WT_PROJECT_NAME="simple-web-demo-copy" --env WT_DOCKER_USERNAME="sunjingyun" --env WT_LANGUAGE="1" --env WT_DOCKER_PASSWORD='PT1nQzVFRE15QWtiMWwzWnVsbWF1VjNVCg==' --env WT_DOCKER_REGISTRY="10.0.0.209" --env WT_BASE_PATH=`pwd` --volumes-from `docker ps | grep "$JENKINS_AGENT_NAME" | grep "wtctl" | cut -d " " -f 1`  worktile/wt-deployment:0.1

                            if [ -f ".wt-cmd.sh" ]; then
                                bash .wt-cmd.sh
                            fi

                            rm -rf .wt-cmd.sh
                            rm -rf .wt-cmd-resource
                        '''
                    }
            }
        }
    }
}