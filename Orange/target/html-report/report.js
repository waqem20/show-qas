$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "OrangHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.oranghrm_logo_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 75\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Weqass-MBP.home\u0027, ip: \u0027fe80:0:0:0:182d:b6ba:990a:d8c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x00000001070b5319 chromedriver + 3597081\n1   chromedriver                        0x0000000107044f73 chromedriver + 3137395\n2   chromedriver                        0x0000000106df0c7f chromedriver + 695423\n3   chromedriver                        0x0000000106d5ea6b chromedriver + 96875\n4   chromedriver                        0x0000000106d5ab18 chromedriver + 80664\n5   chromedriver                        0x0000000106d87139 chromedriver + 262457\n6   chromedriver                        0x0000000106d84753 chromedriver + 251731\n7   chromedriver                        0x0000000106d60aea chromedriver + 105194\n8   chromedriver                        0x0000000106d61b45 chromedriver + 109381\n9   chromedriver                        0x0000000107073f85 chromedriver + 3329925\n10  chromedriver                        0x000000010707f890 chromedriver + 3377296\n11  chromedriver                        0x000000010707f628 chromedriver + 3376680\n12  chromedriver                        0x0000000107053769 chromedriver + 3196777\n13  chromedriver                        0x0000000107080108 chromedriver + 3379464\n14  chromedriver                        0x0000000107067957 chromedriver + 3279191\n15  chromedriver                        0x000000010709ca94 chromedriver + 3496596\n16  chromedriver                        0x00000001070bb047 chromedriver + 3620935\n17  libsystem_pthread.dylib             0x00007fff6585c2eb _pthread_body + 126\n18  libsystem_pthread.dylib             0x00007fff6585f249 _pthread_start + 66\n19  libsystem_pthread.dylib             0x00007fff6585b40d thread_start + 13\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:207)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.utils.BaseClass.browsers(BaseClass.java:24)\n\tat com.stepDefinitions.LoginStep.oranghrm_logo_is_displayed(LoginStep.java:28)\n\tat ✽.OrangHRM logo is displayed(src/test/resources/features/Login.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Valid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"Admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Login is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.login_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "name": "I see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "waqem",
        "hello123",
        "Invalid credentials"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "OrangHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.oranghrm_logo_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 75\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Weqass-MBP.home\u0027, ip: \u0027fe80:0:0:0:182d:b6ba:990a:d8c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x0000000108555319 chromedriver + 3597081\n1   chromedriver                        0x00000001084e4f73 chromedriver + 3137395\n2   chromedriver                        0x0000000108290c7f chromedriver + 695423\n3   chromedriver                        0x00000001081fea6b chromedriver + 96875\n4   chromedriver                        0x00000001081fab18 chromedriver + 80664\n5   chromedriver                        0x0000000108227139 chromedriver + 262457\n6   chromedriver                        0x0000000108224753 chromedriver + 251731\n7   chromedriver                        0x0000000108200aea chromedriver + 105194\n8   chromedriver                        0x0000000108201b45 chromedriver + 109381\n9   chromedriver                        0x0000000108513f85 chromedriver + 3329925\n10  chromedriver                        0x000000010851f890 chromedriver + 3377296\n11  chromedriver                        0x000000010851f628 chromedriver + 3376680\n12  chromedriver                        0x00000001084f3769 chromedriver + 3196777\n13  chromedriver                        0x0000000108520108 chromedriver + 3379464\n14  chromedriver                        0x0000000108507957 chromedriver + 3279191\n15  chromedriver                        0x000000010853ca94 chromedriver + 3496596\n16  chromedriver                        0x000000010855b047 chromedriver + 3620935\n17  libsystem_pthread.dylib             0x00007fff6585c2eb _pthread_body + 126\n18  libsystem_pthread.dylib             0x00007fff6585f249 _pthread_start + 66\n19  libsystem_pthread.dylib             0x00007fff6585b40d thread_start + 13\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:207)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.utils.BaseClass.browsers(BaseClass.java:24)\n\tat com.stepDefinitions.LoginStep.oranghrm_logo_is_displayed(LoginStep.java:28)\n\tat ✽.OrangHRM logo is displayed(src/test/resources/features/Login.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"waqem\" and \"hello123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.i_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.i_see_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
});