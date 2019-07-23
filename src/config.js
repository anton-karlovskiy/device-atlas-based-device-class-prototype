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

// TODO: hardcoded, not modular matched with server URL -> dotenv
const DEVICE_API_URL = 'http://localhost:5000/api/device/';
// ray test touch <
const DEVICE_PROPERTIES_API_URL = 'http://localhost:5000/api/device-properties/';
// ray test touch >

const Multicore_Score_Threshold = 4000;

export {
  DEVICE_API_URL,
  // ray test touch <
  DEVICE_PROPERTIES_API_URL,
  // ray test touch >
  Multicore_Score_Threshold
};
