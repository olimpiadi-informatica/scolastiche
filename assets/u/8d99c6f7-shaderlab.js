/*! For licenses information, see LICENSES.txt */
import a from"../v/58b8226c-hlsl.js";const e=Object.freeze(JSON.parse('{"displayName":"ShaderLab","name":"shaderlab","patterns":[{"begin":"//","end":"$","name":"comment.line.double-slash.shaderlab"},{"match":"\\\\b(?i:Range|Float|Int|Color|Vector|2D|3D|Cube|Any)\\\\b","name":"support.type.basic.shaderlab"},{"include":"#numbers"},{"match":"\\\\b(?i:Shader|Properties|SubShader|Pass|Category)\\\\b","name":"storage.type.structure.shaderlab"},{"match":"\\\\b(?i:Name|Tags|Fallback|CustomEditor|Cull|ZWrite|ZTest|Offset|Blend|BlendOp|ColorMask|AlphaToMask|LOD|Lighting|Stencil|Ref|ReadMask|WriteMask|Comp|CompBack|CompFront|Fail|ZFail|UsePass|GrabPass|Dependency|Material|Diffuse|Ambient|Shininess|Specular|Emission|Fog|Mode|Density|SeparateSpecular|SetTexture|Combine|ConstantColor|Matrix|AlphaTest|ColorMaterial|BindChannels|Bind)\\\\b","name":"support.type.propertyname.shaderlab"},{"match":"\\\\b(?i:Back|Front|On|Off|[RGBA]{1,3}|AmbientAndDiffuse|Emission)\\\\b","name":"support.constant.property-value.shaderlab"},{"match":"\\\\b(?i:Less|Greater|LEqual|GEqual|Equal|NotEqual|Always|Never)\\\\b","name":"support.constant.property-value.comparisonfunction.shaderlab"},{"match":"\\\\b(?i:Keep|Zero|Replace|IncrSat|DecrSat|Invert|IncrWrap|DecrWrap)\\\\b","name":"support.constant.property-value.stenciloperation.shaderlab"},{"match":"\\\\b(?i:Previous|Primary|Texture|Constant|Lerp|Double|Quad|Alpha)\\\\b","name":"support.constant.property-value.texturecombiners.shaderlab"},{"match":"\\\\b(?i:Global|Linear|Exp2|Exp)\\\\b","name":"support.constant.property-value.fog.shaderlab"},{"match":"\\\\b(?i:Vertex|Normal|Tangent|TexCoord0|TexCoord1)\\\\b","name":"support.constant.property-value.bindchannels.shaderlab"},{"match":"\\\\b(?i:Add|Sub|RevSub|Min|Max|LogicalClear|LogicalSet|LogicalCopyInverted|LogicalCopy|LogicalNoop|LogicalInvert|LogicalAnd|LogicalNand|LogicalOr|LogicalNor|LogicalXor|LogicalEquiv|LogicalAndReverse|LogicalAndInverted|LogicalOrReverse|LogicalOrInverted)\\\\b","name":"support.constant.property-value.blendoperations.shaderlab"},{"match":"\\\\b(?i:One|Zero|SrcColor|SrcAlpha|DstColor|DstAlpha|OneMinusSrcColor|OneMinusSrcAlpha|OneMinusDstColor|OneMinusDstAlpha)\\\\b","name":"support.constant.property-value.blendfactors.shaderlab"},{"match":"\\\\[([a-zA-Z_][a-zA-Z0-9_]*)\\\\](?!\\\\s*[a-zA-Z_][a-zA-Z0-9_]*\\\\s*\\\\(\\")","name":"support.variable.reference.shaderlab"},{"begin":"(\\\\[)","end":"(\\\\])","name":"meta.attribute.shaderlab","patterns":[{"match":"\\\\G([a-zA-Z]+)\\\\b","name":"support.type.attributename.shaderlab"},{"include":"#numbers"}]},{"match":"\\\\b([a-zA-Z_][a-zA-Z0-9_]*)\\\\s*\\\\(","name":"support.variable.declaration.shaderlab"},{"begin":"\\\\b(CGPROGRAM|CGINCLUDE)\\\\b","beginCaptures":{"1":{"name":"keyword.other"}},"end":"\\\\b(ENDCG)\\\\b","endCaptures":{"1":{"name":"keyword.other"}},"name":"meta.cgblock","patterns":[{"include":"#hlsl-embedded"}]},{"begin":"\\\\b(HLSLPROGRAM|HLSLINCLUDE)\\\\b","beginCaptures":{"1":{"name":"keyword.other"}},"end":"\\\\b(ENDHLSL)\\\\b","endCaptures":{"1":{"name":"keyword.other"}},"name":"meta.hlslblock","patterns":[{"include":"#hlsl-embedded"}]},{"begin":"\\"","end":"\\"","name":"string.quoted.double.shaderlab"}],"repository":{"hlsl-embedded":{"patterns":[{"include":"source.hlsl"},{"match":"\\\\b(fixed([1-4](x[1-4])?)?)\\\\b","name":"storage.type.basic.shaderlab"},{"match":"\\\\b(UNITY_MATRIX_MVP|UNITY_MATRIX_MV|UNITY_MATRIX_M|UNITY_MATRIX_V|UNITY_MATRIX_P|UNITY_MATRIX_VP|UNITY_MATRIX_T_MV|UNITY_MATRIX_I_V|UNITY_MATRIX_IT_MV|_Object2World|_World2Object|unity_ObjectToWorld|unity_WorldToObject)\\\\b","name":"support.variable.transformations.shaderlab"},{"match":"\\\\b(_WorldSpaceCameraPos|_ProjectionParams|_ScreenParams|_ZBufferParams|unity_OrthoParams|unity_CameraProjection|unity_CameraInvProjection|unity_CameraWorldClipPlanes)\\\\b","name":"support.variable.camera.shaderlab"},{"match":"\\\\b(_Time|_SinTime|_CosTime|unity_DeltaTime)\\\\b","name":"support.variable.time.shaderlab"},{"match":"\\\\b(_LightColor0|_WorldSpaceLightPos0|_LightMatrix0|unity_4LightPosX0|unity_4LightPosY0|unity_4LightPosZ0|unity_4LightAtten0|unity_LightColor|_LightColor|unity_LightPosition|unity_LightAtten|unity_SpotDirection)\\\\b","name":"support.variable.lighting.shaderlab"},{"match":"\\\\b(unity_AmbientSky|unity_AmbientEquator|unity_AmbientGround|UNITY_LIGHTMODEL_AMBIENT|unity_FogColor|unity_FogParams)\\\\b","name":"support.variable.fog.shaderlab"},{"match":"\\\\b(unity_LODFade)\\\\b","name":"support.variable.various.shaderlab"},{"match":"\\\\b(SHADER_API_D3D9|SHADER_API_D3D11|SHADER_API_GLCORE|SHADER_API_OPENGL|SHADER_API_GLES|SHADER_API_GLES3|SHADER_API_METAL|SHADER_API_D3D11_9X|SHADER_API_PSSL|SHADER_API_XBOXONE|SHADER_API_PSP2|SHADER_API_WIIU|SHADER_API_MOBILE|SHADER_API_GLSL)\\\\b","name":"support.variable.preprocessor.targetplatform.shaderlab"},{"match":"\\\\b(SHADER_TARGET)\\\\b","name":"support.variable.preprocessor.targetmodel.shaderlab"},{"match":"\\\\b(UNITY_VERSION)\\\\b","name":"support.variable.preprocessor.unityversion.shaderlab"},{"match":"\\\\b(UNITY_BRANCH|UNITY_FLATTEN|UNITY_NO_SCREENSPACE_SHADOWS|UNITY_NO_LINEAR_COLORSPACE|UNITY_NO_RGBM|UNITY_NO_DXT5nm|UNITY_FRAMEBUFFER_FETCH_AVAILABLE|UNITY_USE_RGBA_FOR_POINT_SHADOWS|UNITY_ATTEN_CHANNEL|UNITY_HALF_TEXEL_OFFSET|UNITY_UV_STARTS_AT_TOP|UNITY_MIGHT_NOT_HAVE_DEPTH_Texture|UNITY_NEAR_CLIP_VALUE|UNITY_VPOS_TYPE|UNITY_CAN_COMPILE_TESSELLATION|UNITY_COMPILER_HLSL|UNITY_COMPILER_HLSL2GLSL|UNITY_COMPILER_CG|UNITY_REVERSED_Z)\\\\b","name":"support.variable.preprocessor.platformdifference.shaderlab"},{"match":"\\\\b(UNITY_PASS_FORWARDBASE|UNITY_PASS_FORWARDADD|UNITY_PASS_DEFERRED|UNITY_PASS_SHADOWCASTER|UNITY_PASS_PREPASSBASE|UNITY_PASS_PREPASSFINAL)\\\\b","name":"support.variable.preprocessor.texture2D.shaderlab"},{"match":"\\\\b(appdata_base|appdata_tan|appdata_full|appdata_img)\\\\b","name":"support.class.structures.shaderlab"},{"match":"\\\\b(SurfaceOutputStandardSpecular|SurfaceOutputStandard|SurfaceOutput|Input)\\\\b","name":"support.class.surface.shaderlab"}]},"numbers":{"patterns":[{"match":"\\\\b([0-9]+\\\\.?[0-9]*)\\\\b","name":"constant.numeric.shaderlab"}]}},"scopeName":"source.shaderlab","embeddedLangs":["hlsl"],"aliases":["shader"]}')),t=[...a,e];export{t as default};
//# sourceMappingURL=8d99c6f7-shaderlab.js.map
