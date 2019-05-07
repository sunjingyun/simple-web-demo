pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
                sh 'npm install'

                sh 'wtctl all'
            }
        }
    }
}