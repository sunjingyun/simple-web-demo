pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
                sh 'npm install'


                sh 'wtctl lint --token=e5735faf-8970-4673-b34f-b7024c0203fe'

                sh 'wtctl test --token=e5735faf-8970-4673-b34f-b7024c0203fe'
            }
        }
    }
}