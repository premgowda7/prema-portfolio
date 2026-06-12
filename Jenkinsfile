node {

    stage('Checkout') {
        git 'https://github.com/premgowda7/prema-portfolio.git'
    }

    stage('Verify Files') {
        sh 'pwd'
        sh 'ls -la'
    }

    stage('Install Dependencies') {
        sh 'npm install'
    }

    stage('Build') {
        sh 'npm run build'
    }

    stage('Verify Build') {
        sh 'ls -la dist'
    }
}
