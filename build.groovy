node {
   stage('Clone repository') {
       git credentialsId: 'ssh-key', url: 'git@git.hethi.cc:boardfish/simon.fish-react'
   }
   stage('Run build script') {
       sh label: '', script: 'scripts/build \$(git tag --points-at HEAD) \$(git rev-parse --abbrev-ref HEAD) \$(git rev-parse --short HEAD)'
   }
}
