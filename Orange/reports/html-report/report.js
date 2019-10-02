$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Employees.feature");
formatter.feature({
  "name": "Employees",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Employees"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I navigated to the Add Employee Page",
  "keyword": "And "
});
formatter.step({
  "name": "I provide \"\u003cfirstName\u003e\" and \"\u003cmiddleName\u003e\" and \"\u003clastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I successfully added an employee",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "middleName",
        "lastName"
      ]
    },
    {
      "cells": [
        "waqem",
        "u",
        "haq"
      ]
    },
    {
      "cells": [
        "joe",
        "joe",
        "star"
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
  "name": "I have logged into OrangeHRM",
  "keyword": "Given "
});
formatter.match({
  "location": "DashBoardSteps.i_have_logged_into_OrangeHRM()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 75\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Weqass-MBP.home\u0027, ip: \u0027fe80:0:0:0:182d:b6ba:990a:d8c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010c5db319 chromedriver + 3597081\n1   chromedriver                        0x000000010c56af73 chromedriver + 3137395\n2   chromedriver                        0x000000010c316c7f chromedriver + 695423\n3   chromedriver                        0x000000010c284a6b chromedriver + 96875\n4   chromedriver                        0x000000010c280b18 chromedriver + 80664\n5   chromedriver                        0x000000010c2ad139 chromedriver + 262457\n6   chromedriver                        0x000000010c2aa753 chromedriver + 251731\n7   chromedriver                        0x000000010c286aea chromedriver + 105194\n8   chromedriver                        0x000000010c287b45 chromedriver + 109381\n9   chromedriver                        0x000000010c599f85 chromedriver + 3329925\n10  chromedriver                        0x000000010c5a5890 chromedriver + 3377296\n11  chromedriver                        0x000000010c5a5628 chromedriver + 3376680\n12  chromedriver                        0x000000010c579769 chromedriver + 3196777\n13  chromedriver                        0x000000010c5a6108 chromedriver + 3379464\n14  chromedriver                        0x000000010c58d957 chromedriver + 3279191\n15  chromedriver                        0x000000010c5c2a94 chromedriver + 3496596\n16  chromedriver                        0x000000010c5e1047 chromedriver + 3620935\n17  libsystem_pthread.dylib             0x00007fff6585c2eb _pthread_body + 126\n18  libsystem_pthread.dylib             0x00007fff6585f249 _pthread_start + 66\n19  libsystem_pthread.dylib             0x00007fff6585b40d thread_start + 13\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:207)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.utils.BaseClass.browsers(BaseClass.java:24)\n\tat com.stepDefinitions.DashBoardSteps.i_have_logged_into_OrangeHRM(DashBoardSteps.java:25)\n\tat ✽.I have logged into OrangeHRM(src/test/resources/features/Employees.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Add Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Employees"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I navigated to the Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "DashBoardSteps.i_navigated_to_the_Add_Employee_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I provide \"waqem\" and \"u\" and \"haq\"",
  "keyword": "When "
});
formatter.match({
  "location": "DashBoardSteps.i_provide_and_haq(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I successfully added an employee",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoardSteps.i_successfully_added_an_employee()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have logged into OrangeHRM",
  "keyword": "Given "
});
formatter.match({
  "location": "DashBoardSteps.i_have_logged_into_OrangeHRM()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 75\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Weqass-MBP.home\u0027, ip: \u0027fe80:0:0:0:182d:b6ba:990a:d8c1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x0000000105c26319 chromedriver + 3597081\n1   chromedriver                        0x0000000105bb5f73 chromedriver + 3137395\n2   chromedriver                        0x0000000105961c7f chromedriver + 695423\n3   chromedriver                        0x00000001058cfa6b chromedriver + 96875\n4   chromedriver                        0x00000001058cbb18 chromedriver + 80664\n5   chromedriver                        0x00000001058f8139 chromedriver + 262457\n6   chromedriver                        0x00000001058f5753 chromedriver + 251731\n7   chromedriver                        0x00000001058d1aea chromedriver + 105194\n8   chromedriver                        0x00000001058d2b45 chromedriver + 109381\n9   chromedriver                        0x0000000105be4f85 chromedriver + 3329925\n10  chromedriver                        0x0000000105bf0890 chromedriver + 3377296\n11  chromedriver                        0x0000000105bf0628 chromedriver + 3376680\n12  chromedriver                        0x0000000105bc4769 chromedriver + 3196777\n13  chromedriver                        0x0000000105bf1108 chromedriver + 3379464\n14  chromedriver                        0x0000000105bd8957 chromedriver + 3279191\n15  chromedriver                        0x0000000105c0da94 chromedriver + 3496596\n16  chromedriver                        0x0000000105c2c047 chromedriver + 3620935\n17  libsystem_pthread.dylib             0x00007fff6585c2eb _pthread_body + 126\n18  libsystem_pthread.dylib             0x00007fff6585f249 _pthread_start + 66\n19  libsystem_pthread.dylib             0x00007fff6585b40d thread_start + 13\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:207)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.utils.BaseClass.browsers(BaseClass.java:24)\n\tat com.stepDefinitions.DashBoardSteps.i_have_logged_into_OrangeHRM(DashBoardSteps.java:25)\n\tat ✽.I have logged into OrangeHRM(src/test/resources/features/Employees.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Add Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Employees"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I navigated to the Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "DashBoardSteps.i_navigated_to_the_Add_Employee_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I provide \"joe\" and \"joe\" and \"star\"",
  "keyword": "When "
});
formatter.match({
  "location": "DashBoardSteps.i_provide_and_haq(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I successfully added an employee",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoardSteps.i_successfully_added_an_employee()"
});
formatter.result({
  "status": "skipped"
});
});