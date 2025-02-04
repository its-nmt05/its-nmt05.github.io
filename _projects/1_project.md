---
layout: page
title: Encodec
description: Neural audio codec based on Meta AI's Encodec Model
img: assets/img/encodec_framework.png
importance: 1
category: work
related_publications: false
---

This is a code implementation of the ["High Fidelity Neural Audio Compression"](https://arxiv.org/abs/2210.13438) paper by Meta AI. For more details visit: [Github](https://github.com/its-nmt05/Encodec/)

### Introduction

This project aims to reproduce the Encodec model architecture as per the paper. The core model consists of a convolution based encoder-decoder network with an additional residual vector quantizer (RVQ) in between for further compression of the latent embeddings into discrete codes.

{% include figure.liquid loading="eager" path="assets/img/encodec_architecture.png" title="architecture" class="img-fluid rounded z-depth-1" %}

A `MS-STFT Discriminator` is further used to enhance the output audio quality by training it using adversarial losses.

The entire model is trained on multiple loss components including reconstruction loss, perceptual loss and discriminator losses. The loss terms are scaled with coefficients to balance the loss between the terms:

$$
L_G = \lambda_t \cdot \ell_t(x, \hat{x}) + \lambda_f \cdot \ell_f(x, \hat{x}) + \lambda_g \cdot \ell_g(\hat{x}) + \lambda_{feat} \cdot \ell_{feat}(x, \hat{x}) + \lambda_w \cdot \ell_w(w)
$$

- `l_g` - adversarial loss for the generator
- `l_feat` - relative feature matching loss for the generator.
- `l_w` - commitment loss for the RVQ
- `l_f` - linear combination of L1 and L2 losses across freq. domain on a mel scale 
- `l_t` - L1 loss across time domian

$L_G$ is the overall loss for the generator.

### Training 

The entire model was trained on the [LibriSpeech ASR corpus](https://www.openslr.org/12) developement dataset with the following hyperparamters:

```py
num_epochs = 50
batch_size = 2
sample_rate = 24000
learning_rate = 0.001
target_bandwidths = [1.5, 3, 6, 12, 24]
norm = 'weight_norm'
causal = False
```

### References

1. [High Fidelity Neural Audio Compression](https://arxiv.org/abs/2210.13438)
2. [Encodec codebase by Meta](https://github.com/facebookresearch/encodec)
3. [Encodec pytorch](https://github.com/ZhikangNiu/encodec-pytorch)
4. [Encodec Trainer](https://github.com/Mikxox/EnCodec_Trainer)