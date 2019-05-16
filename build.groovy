node {
   stage('Clone repository') {
       git credentialsId: 'ssh-key', url: 'git@git.hethi.cc:boardfish/simon.fish-react'
   }
   stage('Run build script') {
       sh label: '', script: 'scripts/build $GIT_BRANCH $GIT_COMMIT'
   }
}
