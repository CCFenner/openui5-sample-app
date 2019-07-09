@Library(['piper-lib-os']) _

pipeline {
  agent any
  stages {
    stage('Test'){
      steps {
        karmaExecuteTests script: this
        // publish reports
        cobertura coberturaReportFile: 'coverage/**/cobertura-coverage.xml'
        junit 'reports/**/TEST-*.xml'
      }
    }
  }
}
