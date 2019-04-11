pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
                sh 'docker run --rm --env WT_TOKEN=e5735faf-8970-4673-b34f-b7024c0203fe --env BUILD_URL="$BUILD_URL" --env BUILD_ID="$BUILD_ID" --env WT_CONFIG=".wt-tslint.json" --env WT_DIR="src/**/*.ts" -v `pwd`:/code sunjingyun/tslint:0.1-test'
            }
        }
    }
}