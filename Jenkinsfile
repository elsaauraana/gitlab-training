pipeline {
    agent any 
   
    stages { 
        stage('Build') {
            steps { 
                sh 'docker build -t custom-node/mysql .'       
                sh 'docker-compose up -d'
            }
        }
        
        stage('push to ecr') {
            steps{
                sh 'aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 590852515231.dkr.ecr.us-west-2.amazonaws.com'
               
                sh 'docker tag custom-node/mysql 590852515231.dkr.ecr.us-west-2.amazonaws.com/my-jenkins-repo:latest'
                sh 'docker push 590852515231.dkr.ecr.us-west-2.amazonaws.com/my-jenkins-repo:latest'
              
            }
        }
        
        
        
        
   
}
}
