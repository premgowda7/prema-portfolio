node {

    stage('Checkout') {
        git branch: 'main',
            url: 'https://github.com/premgowda7/prema-portfolio.git'
    }

    stage('Install') {
        sh 'npm install'
    }

    stage('Build') {
        sh 'npm run build'
    }

    stage('Deploy') {
        sh '''
        sudo rm -rf /var/www/html/*
        sudo cp -r dist/* /var/www/html/
        sudo systemctl restart nginx
        '''
    }
}
