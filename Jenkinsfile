stage ('Ready to trigger the deployment') {
    build job: 'wt-generic-devops-job', 
    parameters: [
        [$class: 'StringParameterValue', name: 'PROJECT', value: "simple-web-demo"],
        [$class: 'StringParameterValue', name: 'PROJECT_GITHUB_URL', value: "github.com:sunjingyun/simple-web-demo.git"],
        [$class: 'BooleanParameterValue', name: 'BUILD_IMAGE', value: true],
        [$class: 'StringParameterValue', name: 'IMAGE_TAG', value: ""],
        [$class: 'BooleanParameterValue', name: 'UPLOAD_IMAGE', value: true],
        [$class: 'BooleanParameterValue', name: 'DEPLOY_IMAGE', value: true]
    ]
}
