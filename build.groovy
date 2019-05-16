node {
   stage('Clone repository') {
       git credentialsId: 'ssh-key', url: 'git@git.hethi.cc:boardfish/simon.fish-react'
   }
   stage('Run build script') {
       withCredentials([usernamePassword(credentialsId: 'docker-registry', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
           sh label: '', script: 'docker login --username ${DOCKER_USERNAME} --password ${DOCKER_PASSWORD} docker.hethi.cc && scripts/build \$(git tag --points-at HEAD) \$(git rev-parse --abbrev-ref HEAD) \$(git rev-parse --short HEAD)'
       }
    }
}
