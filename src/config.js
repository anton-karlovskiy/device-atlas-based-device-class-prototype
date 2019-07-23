/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/'

// e.g. https://api.userstack.com/detect?access_key=657ccc84588ca50f125528dee37105a6&ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36
const USERSTACK_API_URL = 'http://api.userstack.com/detect';
const USERSTACK_API_KEY = '657ccc84588ca50f125528dee37105a6';

// windows phones are excluded
const ANDROID_BENCHMARKS_URL = 'https://browser.geekbench.com/android-benchmarks.json/';
const IOS_BENCHMARKS_URL = 'https://browser.geekbench.com/ios-benchmarks.json/';

const Multicore_Score_Threshold = 4000;

export {
  CORS_ANYWHERE,
  USERSTACK_API_URL,
  USERSTACK_API_KEY,
  ANDROID_BENCHMARKS_URL,
  IOS_BENCHMARKS_URL,
  Multicore_Score_Threshold
};
